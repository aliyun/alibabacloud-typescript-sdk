// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class PullServicesResponseBodyDataServices extends $dara.Model {
  /**
   * @remarks
   * The name of the group.
   * 
   * @example
   * test
   */
  groupName?: string;
  /**
   * @remarks
   * The name of the service.
   * 
   * @example
   * test
   */
  name?: string;
  /**
   * @remarks
   * The namespace.
   * 
   * @example
   * public
   */
  namespace?: string;
  saeAppId?: string;
  /**
   * @remarks
   * The ID of the service source.
   * 
   * @example
   * 1
   */
  sourceId?: string;
  sourceIdList?: number[];
  /**
   * @remarks
   * The type of the service source.
   * 
   * @example
   * MSE
   */
  sourceType?: string;
  static names(): { [key: string]: string } {
    return {
      groupName: 'GroupName',
      name: 'Name',
      namespace: 'Namespace',
      saeAppId: 'SaeAppId',
      sourceId: 'SourceId',
      sourceIdList: 'SourceIdList',
      sourceType: 'SourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupName: 'string',
      name: 'string',
      namespace: 'string',
      saeAppId: 'string',
      sourceId: 'string',
      sourceIdList: { 'type': 'array', 'itemType': 'number' },
      sourceType: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.sourceIdList)) {
      $dara.Model.validateArray(this.sourceIdList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

