// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateAcceleratorCrossBorderModeRequest extends $dara.Model {
  /**
   * @remarks
   * The GA instance ID.
   * 
   * > The bandwidth metering method of the GA instance must be pay-by-data-transfer.
   * 
   * This parameter is required.
   * 
   * @example
   * ga-bp1odcab8tmno0hdq****
   */
  acceleratorId?: string;
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request.
   * 
   * You can use the client to generate the token, but you must make sure that the token is unique among different requests. The token can contain only ASCII characters.
   * 
   * > If you do not specify this parameter, the system automatically uses the **request ID** as the **client token**. The **request ID** may be different for each request.
   * 
   * @example
   * 123e4567-e89b-12d3-a456-426655440000
   */
  clientToken?: string;
  /**
   * @remarks
   * The type of transmission network of the GA instance. Valid values:
   * 
   * *   **bgpPro**: BGP (Multi-ISP) Pro. BGP (Multi-ISP) Pro lines are used for cross-border acceleration. You do not need to complete real-name verification.
   * *   **private**: cross-border Express Connect circuit. Cross-border Express Connect circuits provide better acceleration performance but require real-name verification.
   * 
   * This parameter is required.
   * 
   * @example
   * bgpPro
   */
  crossBorderMode?: string;
  /**
   * @remarks
   * The region ID of the GA instance. Set the value to **cn-hangzhou**.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      acceleratorId: 'AcceleratorId',
      clientToken: 'ClientToken',
      crossBorderMode: 'CrossBorderMode',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acceleratorId: 'string',
      clientToken: 'string',
      crossBorderMode: 'string',
      regionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

