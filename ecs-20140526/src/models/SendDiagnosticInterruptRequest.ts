// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SendDiagnosticInterruptRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to only precheck this request. Valid values: ● true: sends a precheck request without sending the NMI command. ● false (default): sends a normal NMI request to trigger a crash dump.
   * 
   * @example
   * false
   */
  dryRun?: boolean;
  /**
   * @remarks
   * The instance ID to send the diagnostic break.
   * 
   * This parameter is required.
   * 
   * @example
   * i-bp67acfmxazb4ph****
   */
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      dryRun: 'DryRun',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dryRun: 'boolean',
      instanceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

