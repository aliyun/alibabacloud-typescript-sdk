// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateCloudConnectNetworkResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the CCN instance.
   * 
   * @example
   * ccn-l9340rlu5ens*****
   */
  ccnId?: string;
  /**
   * @remarks
   * The private CIDR block.
   * 
   * @example
   * 172.XX.XX.0/24
   */
  cidrBlock?: string;
  /**
   * @remarks
   * The description about the CCN instance.
   * 
   * @example
   * ccndesc
   */
  description?: string;
  /**
   * @remarks
   * The name of the CCN instance.
   * 
   * @example
   * ccnname
   */
  name?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * C48E8EB2-37A4-495B-A95C-29CA1FD26C82
   */
  requestId?: string;
  /**
   * @remarks
   * The ID of the resource group to which the CCN instance belongs.
   * 
   * @example
   * rg-acfm2iu4fnc****
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The private CIDR block used for SNAT.
   * 
   * @example
   * 172.XX.XX.0/25
   */
  snatCidrBlock?: string;
  /**
   * @remarks
   * The status of the CCN instance. Valid values:
   * 
   * *   **Active**: indicates the CNN instance running as expected.
   * *   **Pending**: indicates the CCN instance is to be created.
   * 
   * @example
   * Active
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      ccnId: 'CcnId',
      cidrBlock: 'CidrBlock',
      description: 'Description',
      name: 'Name',
      requestId: 'RequestId',
      resourceGroupId: 'ResourceGroupId',
      snatCidrBlock: 'SnatCidrBlock',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ccnId: 'string',
      cidrBlock: 'string',
      description: 'string',
      name: 'string',
      requestId: 'string',
      resourceGroupId: 'string',
      snatCidrBlock: 'string',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

