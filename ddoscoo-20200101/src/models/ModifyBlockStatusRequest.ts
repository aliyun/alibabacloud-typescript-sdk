// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyBlockStatusRequest extends $dara.Model {
  /**
   * @remarks
   * The blocking period. Valid values: **15** to **43200**. Unit: minutes.
   * 
   * > If you set **Status** to **do**, you must also specify this parameter.
   * 
   * @example
   * 60
   */
  duration?: number;
  /**
   * @remarks
   * The ID of the Anti-DDoS Proxy (Chinese Mainland) instance to manage.
   * 
   * >  You can call the [DescribeInstanceIds](https://help.aliyun.com/document_detail/157459.html) operation to query the IDs of all Anti-DDoS Proxy instances.
   * 
   * This parameter is required.
   * 
   * @example
   * ddoscoo-cn-mp91j1ao****
   */
  instanceId?: string;
  /**
   * @remarks
   * An array consisting of the Internet service provider (ISP) lines from which traffic is blocked.
   * 
   * This parameter is required.
   * 
   * @example
   * ct
   */
  lines?: string[];
  /**
   * @remarks
   * Specifies the status of the Diversion from Origin Server policy. Valid values:
   * 
   * *   **do**: enables the policy.
   * *   **undo**: disables the policy.
   * 
   * This parameter is required.
   * 
   * @example
   * do
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      duration: 'Duration',
      instanceId: 'InstanceId',
      lines: 'Lines',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      duration: 'number',
      instanceId: 'string',
      lines: { 'type': 'array', 'itemType': 'string' },
      status: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.lines)) {
      $dara.Model.validateArray(this.lines);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

