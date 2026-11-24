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
   * The shipping address has been submitted. Arrange delivery as soon as possible.
   */
  remark?: string;
  /**
   * @remarks
   * The form content to submit, in JSON format. Example: {"TFD0":"mr.go","TFD1":"1330010xxxx","TFD2":"Chaoyang District, Wangjing Street, Block x, No. y"}.
   * 
   * @example
   * {"TFD0": "Mr.Go","TFD1": "1330010xxxx","TFD2": "Wangjing Street, Block X, No. Y, Chaoyang District, Beijing" }
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

