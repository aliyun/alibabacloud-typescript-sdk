// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeUserBackupMachinesResponseBodyMachines extends $dara.Model {
  /**
   * @remarks
   * The ID of the anti-ransomware policy that is applied to the server.
   * 
   * @example
   * 123
   */
  id?: number;
  /**
   * @remarks
   * The name of the anti-ransomware policy that is applied to the server.
   * 
   * @example
   * policy_name_A
   */
  policyName?: string;
  /**
   * @remarks
   * The UUID of the server to which the anti-ransomware policy is applied.
   * 
   * @example
   * D0D6E6E4-CB8C-4897-B852-46AEFDA0****
   */
  uuid?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      policyName: 'PolicyName',
      uuid: 'Uuid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'number',
      policyName: 'string',
      uuid: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeUserBackupMachinesResponseBody extends $dara.Model {
  /**
   * @remarks
   * An array consisting of the servers to which the anti-ransomware policy is applied.
   */
  machines?: DescribeUserBackupMachinesResponseBodyMachines[];
  /**
   * @remarks
   * The ID of the request, which is used to locate and troubleshoot issues.
   * 
   * @example
   * D0D6E6E4-CB8C-4897-B852-46AEFDA04B21
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      machines: 'Machines',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      machines: { 'type': 'array', 'itemType': DescribeUserBackupMachinesResponseBodyMachines },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.machines)) {
      $dara.Model.validateArray(this.machines);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

