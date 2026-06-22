// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeUserBackupMachinesResponseBodyMachines extends $dara.Model {
  /**
   * @remarks
   * The ID of the policy enabled on the server.
   * 
   * @example
   * 123
   */
  id?: number;
  /**
   * @remarks
   * The name of the policy enabled on the server.
   * 
   * @example
   * policy_name_A
   */
  policyName?: string;
  /**
   * @remarks
   * The UUID of the server that has a backup policy enabled.
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
   * The information about servers that have backup policies enabled.
   */
  machines?: DescribeUserBackupMachinesResponseBodyMachines[];
  /**
   * @remarks
   * The ID of the request. Alibaba Cloud generates a unique identifier for each request. You can use the ID to troubleshoot issues.
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

