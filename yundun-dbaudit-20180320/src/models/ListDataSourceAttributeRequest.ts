// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDataSourceAttributeRequest extends $dara.Model {
  /**
   * @example
   * 1
   */
  dbIds?: string[];
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * dbaudit-cn-78v1gc****
   */
  instanceId?: string;
  lang?: string;
  /**
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      dbIds: 'DbIds',
      instanceId: 'InstanceId',
      lang: 'Lang',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dbIds: { 'type': 'array', 'itemType': 'string' },
      instanceId: 'string',
      lang: 'string',
      regionId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.dbIds)) {
      $dara.Model.validateArray(this.dbIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

