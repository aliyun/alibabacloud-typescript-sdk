// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdatePlaybookShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The language type for requests and received messages. Values:
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
   * alb block
   */
  playbookDescription?: string;
  /**
   * @remarks
   * List of input parameter configurations for the playbook.
   */
  playbookInputConfigsShrink?: string;
  /**
   * @remarks
   * The name of the playbook.
   * 
   * @example
   * system_aliyun_alb_process_book
   */
  playbookName?: string;
  /**
   * @remarks
   * List of output parameter configurations for the playbook.
   */
  playbookOutputConfigsShrink?: string;
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
   * template-ip
   */
  playbookParamType?: string;
  /**
   * @remarks
   * Content of the playbook.
   * 
   * @example
   * [{"id":"58d87b7d-28d9-4f0e-b135-4adc4f1a70e4","zIndex":1,"data":{"nodeType":"startEvent","appType":"basic","nodeName":"start","icon":"icon-circle","description":"start"},"position":{"x":-440,"y":-170}},{"id":"5293c3f9-e1c9-4a49-b0eb-635067dc67e8","zIndex":1,"data":{"nodeType":"sequenceFlow","appType":"basic","icon":"icon-upper-right-arrow","isRequired":true},"source":{"cell":"58d87b7d-28d9-4f0e-b135-4adc4f1a70e4"},"target":{"cell":"f9d6d1f5-b0cd-45b6-93d0-02cd4b2a6fa2"},"vertices":[]},{"id":"317dd1be-2d20-460e-977e-1fc936ffb583","zIndex":1,"data":{"nodeType":"endEvent","appType":"basic","nodeName":"end","icon":"icon-radio-off-full","description":"end"},"position":{"x":-140,"y":-170}},{"id":"f9d6d1f5-b0cd-45b6-93d0-02cd4b2a6fa2","zIndex":1,"data":{"isDebug":false,"nodeType":"action","appType":"component","nodeName":"data","valueData":{"outputFields":"[{\\"fieldName\\":\\"ip\\",\\"fieldValue\\":\\"${event.ip}\\"}]"},"icon":"https://img.alicdn.com/imgextra/i2/O1CN01NCKmL026m1z8o0DeN_!!6000000007703-2-tps-248-248.png","description":"","advance":{"inputParamMode":false,"onError":"stop_cur_flow","rspStatusType":3,"rspStatusThreshold":0},"componentName":"DataFormat","actionName":"formatdata"},"position":{"x":-340,"y":-185}},{"id":"1c7f0021-fb93-4478-b10f-af78dd5a69d6","zIndex":1,"data":{"nodeType":"sequenceFlow","appType":"basic","icon":"icon-upper-right-arrow","isRequired":true},"source":{"cell":"f9d6d1f5-b0cd-45b6-93d0-02cd4b2a6fa2"},"target":{"cell":"317dd1be-2d20-460e-977e-1fc936ffb583"},"vertices":[]}]
   */
  playbookTaskFlow?: string;
  /**
   * @remarks
   * UUID of the playbook.
   * 
   * This parameter is required.
   * 
   * @example
   * 8f55e76d-b5d5-4720-9cd7-xxxxx
   */
  playbookUuid?: string;
  /**
   * @remarks
   * The user ID for the administrator to switch to another member\\"s perspective.
   * 
   * @example
   * 13760*****718726
   */
  roleFor?: number;
  static names(): { [key: string]: string } {
    return {
      lang: 'Lang',
      playbookDescription: 'PlaybookDescription',
      playbookInputConfigsShrink: 'PlaybookInputConfigs',
      playbookName: 'PlaybookName',
      playbookOutputConfigsShrink: 'PlaybookOutputConfigs',
      playbookParamType: 'PlaybookParamType',
      playbookTaskFlow: 'PlaybookTaskFlow',
      playbookUuid: 'PlaybookUuid',
      roleFor: 'RoleFor',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lang: 'string',
      playbookDescription: 'string',
      playbookInputConfigsShrink: 'string',
      playbookName: 'string',
      playbookOutputConfigsShrink: 'string',
      playbookParamType: 'string',
      playbookTaskFlow: 'string',
      playbookUuid: 'string',
      roleFor: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

