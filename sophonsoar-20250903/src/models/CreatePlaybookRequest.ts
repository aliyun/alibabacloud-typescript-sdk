// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { FieldInputConfig } from "./FieldInputConfig";
import { FieldOutputConfig } from "./FieldOutputConfig";


export class CreatePlaybookRequest extends $dara.Model {
  /**
   * @remarks
   * Language type for receiving messages. Values:
   * 
   * - **zh** (default): Chinese.
   * - **en**: English.
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * Description of the playbook.
   * 
   * @example
   * waf ip block
   */
  playbookDescription?: string;
  /**
   * @remarks
   * Input parameter configuration of the playbook.
   */
  playbookInputConfigs?: FieldInputConfig[];
  /**
   * @remarks
   * Name of the playbook, without special characters.
   * 
   * This parameter is required.
   * 
   * @example
   * waftest
   */
  playbookName?: string;
  /**
   * @remarks
   * Output parameter configuration of the playbook.
   */
  playbookOutputConfigs?: FieldOutputConfig[];
  /**
   * @remarks
   * Type of input parameters for the playbook.
   * 
   * - **template-ip**: IP entity.
   * - **template-file**: File entity.
   * - **template-process**: Process entity.
   * - **template-host**: Host entity.
   * - **template-domain**: Domain entity.
   * - **template-container**: Container entity.
   * - **template-incident**: Security incident.
   * - **template-alert**: Security alert.
   * - **custom**: Custom.
   * 
   * @example
   * custom
   */
  playbookParamType?: string;
  /**
   * @remarks
   * Workflow of the playbook.
   * 
   * @example
   * [{"id":"58d87b7d-28d9-4f0e-b135-4adc4f1a70e4","zIndex":1,"data":{"nodeType":"startEvent","appType":"basic","nodeName":"start","icon":"icon-circle","description":"start"},"position":{"x":-440,"y":-170}},{"id":"5293c3f9-e1c9-4a49-b0eb-635067dc67e8","zIndex":1,"data":{"nodeType":"sequenceFlow","appType":"basic","icon":"icon-upper-right-arrow","isRequired":true},"source":{"cell":"58d87b7d-28d9-4f0e-b135-4adc4f1a70e4"},"target":{"cell":"f9d6d1f5-b0cd-45b6-93d0-02cd4b2a6fa2"},"vertices":[]},{"id":"317dd1be-2d20-460e-977e-1fc936ffb583","zIndex":1,"data":{"nodeType":"endEvent","appType":"basic","nodeName":"end","icon":"icon-radio-off-full","description":"end"},"position":{"x":-140,"y":-170}},{"id":"f9d6d1f5-b0cd-45b6-93d0-02cd4b2a6fa2","zIndex":1,"data":{"isDebug":false,"nodeType":"action","appType":"component","nodeName":"data","valueData":{"outputFields":"[{\\"fieldName\\":\\"ip\\",\\"fieldValue\\":\\"${event.ip}\\"}]"},"icon":"https://img.alicdn.com/imgextra/i2/O1CN01NCKmL026m1z8o0DeN_!!6000000007703-2-tps-248-248.png","description":"","advance":{"inputParamMode":false,"onError":"stop_cur_flow","rspStatusType":3,"rspStatusThreshold":0},"componentName":"DataFormat","actionName":"formatdata"},"position":{"x":-340,"y":-185}},{"id":"1c7f0021-fb93-4478-b10f-af78dd5a69d6","zIndex":1,"data":{"nodeType":"sequenceFlow","appType":"basic","icon":"icon-upper-right-arrow","isRequired":true},"source":{"cell":"f9d6d1f5-b0cd-45b6-93d0-02cd4b2a6fa2"},"target":{"cell":"317dd1be-2d20-460e-977e-1fc936ffb583"},"vertices":[]}]
   */
  playbookTaskFlow?: string;
  /**
   * @remarks
   * Resource directory member account ID.
   * 
   * @example
   * 170*********3093
   */
  roleFor?: number;
  /**
   * @remarks
   * In a copy scenario, the UUID of the source playbook needs to be filled in. When this parameter has a value, all other parameters except the playbook name and description are invalid.
   * 
   * @example
   * 1B5A9144-****-****-A466-****9D64AA99
   */
  srcPlaybookUuid?: string;
  static names(): { [key: string]: string } {
    return {
      lang: 'Lang',
      playbookDescription: 'PlaybookDescription',
      playbookInputConfigs: 'PlaybookInputConfigs',
      playbookName: 'PlaybookName',
      playbookOutputConfigs: 'PlaybookOutputConfigs',
      playbookParamType: 'PlaybookParamType',
      playbookTaskFlow: 'PlaybookTaskFlow',
      roleFor: 'RoleFor',
      srcPlaybookUuid: 'SrcPlaybookUuid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lang: 'string',
      playbookDescription: 'string',
      playbookInputConfigs: { 'type': 'array', 'itemType': FieldInputConfig },
      playbookName: 'string',
      playbookOutputConfigs: { 'type': 'array', 'itemType': FieldOutputConfig },
      playbookParamType: 'string',
      playbookTaskFlow: 'string',
      roleFor: 'number',
      srcPlaybookUuid: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.playbookInputConfigs)) {
      $dara.Model.validateArray(this.playbookInputConfigs);
    }
    if(Array.isArray(this.playbookOutputConfigs)) {
      $dara.Model.validateArray(this.playbookOutputConfigs);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

