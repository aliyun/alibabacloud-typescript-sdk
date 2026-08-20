// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class FinishCurrentProjectNodeRequest extends $dara.Model {
  /**
   * @remarks
   * The instance ID of the Alibaba Cloud Marketplace order.
   * 
   * This parameter is required.
   * 
   * @example
   * 4****89
   */
  instanceId?: string;
  /**
   * @remarks
   * The ID of the process node.
   * 
   * This parameter is required.
   * 
   * @example
   * 1924
   */
  nodeId?: number;
  /**
   * @remarks
   * The remarks.
   * 
   * @example
   * 收货地址已提交，请尽快安排发货。
   */
  remark?: string;
  /**
   * @remarks
   * The form content to submit, in JSON format. Example: {"TFD0":"mr.go","TFD1":"1330010xxxx","TFD2":"Chaoyang District, Wangjing Street, Block x, No. y"}.
   * 
   * @example
   * {"TFD0": "Mr.Go","TFD1": "1330010xxxx","TFD2": "北京市朝阳区望京街道X区Y号" }
   */
  templateForm?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      nodeId: 'NodeId',
      remark: 'Remark',
      templateForm: 'TemplateForm',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      nodeId: 'number',
      remark: 'string',
      templateForm: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

