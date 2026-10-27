// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetAnnotationMissionTagInfoListRequest extends $dara.Model {
  /**
   * @remarks
   * The instance ID.
   * 
   * > If this parameter is not specified, the default tags of the tenant are returned.
   * 
   * @example
   * 4eee9bf8-1319-468f-ac82-83c50ae389f8
   */
  instanceId?: string;
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageIndex?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      pageIndex: 'PageIndex',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      pageIndex: 'number',
      pageSize: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

