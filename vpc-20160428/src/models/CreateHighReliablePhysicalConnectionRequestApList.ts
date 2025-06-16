// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateHighReliablePhysicalConnectionRequestApList extends $dara.Model {
  /**
   * @remarks
   * The ID of the access point that is associated with the Express Connect circuit.
   * 
   * > Two access points must be specified when **HighReliableType** is set to **MultiApMultiDevice** or **MultiApSingleDevice**. One access point must be specified when **HighReliableType** is set to **SingleApMultiDevice** or **SingleApMultiConnection**.
   * 
   * This parameter is required.
   * 
   * @example
   * ap-cn-beijing-ft-A
   */
  accessPointId?: string;
  /**
   * @remarks
   * The maximum bandwidth of the hosted connection. Unit: Mbit/s.
   * 
   * Valid values: 50, 100, 200, 300, 400, 500, 1000, 2000, 4000, 5000, 8000, and 10000.
   * 
   * @example
   * 50
   */
  bandwidth?: number;
  /**
   * @remarks
   * The circuit code of the Express Connect circuit, which is provided by the connectivity provider.
   * 
   * @example
   * longtel001
   */
  circuitCode?: string;
  /**
   * @remarks
   * The description of the Express Connect circuit.
   * 
   * The description must be 2 to 256 characters in length. It must start with a letter but cannot start with `http://` or `https://`.
   * 
   * @example
   * description
   */
  description?: string;
  /**
   * @remarks
   * The connectivity provider of the Express Connect circuit. Valid values:
   * 
   * *   **CT**: China Telecom.
   * *   **CU**: China Unicom.
   * *   **CM**: China Mobile.
   * *   **CO**: other connectivity providers in the Chinese mainland.
   * *   **Equinix**: Equinix.
   * *   **Other**: other connectivity providers outside the Chinese mainland.
   * 
   * This parameter is required.
   * 
   * @example
   * CT
   */
  lineOperator?: string;
  /**
   * @remarks
   * The name of the Express Connect circuit.
   * 
   * The name must be 2 to 128 characters in length, and can contain letters, digits, underscores (_), and hyphens (-). It must start with a letter but cannot start with `http://` or` https://`.
   * 
   * @example
   * test
   */
  name?: string;
  /**
   * @remarks
   * The geographical location of the data center.
   * 
   * @example
   * ram-test
   */
  peerLocation?: string;
  /**
   * @remarks
   * The number of ports. Valid values: 2 to 16. This parameter is required only when **HighReliableType** is set to **SingleApMultiConnection**.
   * 
   * @example
   * 2
   */
  portNum?: number;
  /**
   * @remarks
   * The region ID of the Express Connect circuit.
   * 
   * You can call the [DescribeRegions](https://help.aliyun.com/document_detail/36063.html) operation to query the most recent region list.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-shanghai
   */
  regionId?: string;
  /**
   * @remarks
   * The type of the Express Connect circuit. Default value: **VPC**.
   * 
   * @example
   * VPC
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      accessPointId: 'AccessPointId',
      bandwidth: 'Bandwidth',
      circuitCode: 'CircuitCode',
      description: 'Description',
      lineOperator: 'LineOperator',
      name: 'Name',
      peerLocation: 'PeerLocation',
      portNum: 'PortNum',
      regionId: 'RegionId',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessPointId: 'string',
      bandwidth: 'number',
      circuitCode: 'string',
      description: 'string',
      lineOperator: 'string',
      name: 'string',
      peerLocation: 'string',
      portNum: 'number',
      regionId: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

