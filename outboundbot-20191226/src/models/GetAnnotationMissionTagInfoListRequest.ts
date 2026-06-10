// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetAnnotationMissionTagInfoListRequest extends $dara.Model {
  /**
   * @remarks
   * Instance ID
   * 
   * > If you do not specify this parameter, the system returns the default tags for the tenant.
   * 
   * @example
   * 4eee9bf8-1319-468f-ac82-83c50ae389f8
   */
  instanceId?: string;
  /**
   * @remarks
   * Page number
   * 
   * @example
   * 1
   */
  pageIndex?: number;
  /**
   * @remarks
   * Number of records per page
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

