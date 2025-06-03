// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CreateMessageRequestMessagesContentDingNormalCardDynamicDataSourceConfigsPullConfig } from "./CreateMessageRequestMessagesContentDingNormalCardDynamicDataSourceConfigsPullConfig";


export class CreateMessageRequestMessagesContentDingNormalCardDynamicDataSourceConfigs extends $dara.Model {
  /**
   * @example
   * {}
   */
  constParams?: { [key: string]: any };
  /**
   * @example
   * dynamicDataSourceId1
   */
  dynamicDataSourceId?: string;
  /**
   * @example
   * {}
   */
  pullConfig?: CreateMessageRequestMessagesContentDingNormalCardDynamicDataSourceConfigsPullConfig;
  static names(): { [key: string]: string } {
    return {
      constParams: 'constParams',
      dynamicDataSourceId: 'dynamicDataSourceId',
      pullConfig: 'pullConfig',
    };
  }

  static types(): { [key: string]: any } {
    return {
      constParams: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      dynamicDataSourceId: 'string',
      pullConfig: CreateMessageRequestMessagesContentDingNormalCardDynamicDataSourceConfigsPullConfig,
    };
  }

  validate() {
    if(this.constParams) {
      $dara.Model.validateMap(this.constParams);
    }
    if(this.pullConfig && typeof (this.pullConfig as any).validate === 'function') {
      (this.pullConfig as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

