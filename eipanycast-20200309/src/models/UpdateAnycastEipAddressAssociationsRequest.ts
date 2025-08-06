// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateAnycastEipAddressAssociationsRequestPopLocationAddList extends $dara.Model {
  /**
   * @remarks
   * The access points in the access areas to be added.
   * 
   * You can call the [DescribeAnycastPopLocations](https://help.aliyun.com/document_detail/171938.html) operation to query the access points in supported access areas.
   * 
   * @example
   * us-west-1-pop
   */
  popLocation?: string;
  static names(): { [key: string]: string } {
    return {
      popLocation: 'PopLocation',
    };
  }

  static types(): { [key: string]: any } {
    return {
      popLocation: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateAnycastEipAddressAssociationsRequestPopLocationDeleteList extends $dara.Model {
  /**
   * @remarks
   * The access points in the access areas to be deleted.
   * 
   * >  If the access point in the access area is associated with a default origin server, you cannot delete the access point in the access area.
   * 
   * @example
   * eu-west-1-pop
   */
  popLocation?: string;
  static names(): { [key: string]: string } {
    return {
      popLocation: 'PopLocation',
    };
  }

  static types(): { [key: string]: any } {
    return {
      popLocation: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateAnycastEipAddressAssociationsRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the Anycast EIP.
   * 
   * This parameter is required.
   * 
   * @example
   * aeip-bp1ix34fralt4ykf3****
   */
  anycastId?: string;
  /**
   * @remarks
   * The association mode. Valid values:
   * 
   * *   **Default**: the default mode. In this mode, cloud resources to be associated are set as default origin servers.
   * *   **Normal**: the standard mode. In this mode, cloud resources to be associated are set as standard origin servers.
   * 
   * @example
   * Default
   */
  associationMode?: string;
  /**
   * @remarks
   * The ID of the cloud resource with which you want to associate the Anycast EIP.
   * 
   * This parameter is required.
   * 
   * @example
   * lb-d7oxbixhxv1uupnon****
   */
  bindInstanceId?: string;
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request.
   * 
   * You can use the client to generate the value, but you must make sure that it is unique among different requests. The token can contain only ASCII characters and cannot exceed 64 characters in length.
   * 
   * >  If you do not set this parameter, the system automatically uses **RequestId** as **ClientToken**. **RequestId** may be different for each API request.
   * 
   * @example
   * 02fb3da4-130e-11e9-8e44-001****
   */
  clientToken?: string;
  /**
   * @remarks
   * Specifies whether to only precheck the request. Valid values:
   * 
   * *   **true**: prechecks the request without updating the association information. The system checks the required parameters, request syntax, and limits. If the request fails to pass the precheck, an error message is returned. If the request passes the precheck, the `DryRunOperation` error code is returned.
   * *   **false** (default): sends the API request. If the request passes the precheck, a 2xx HTTP status code is returned and the operation is performed.
   * 
   * @example
   * false
   */
  dryRun?: boolean;
  /**
   * @remarks
   * The access areas and access points to be added.
   */
  popLocationAddList?: UpdateAnycastEipAddressAssociationsRequestPopLocationAddList[];
  /**
   * @remarks
   * The access areas and access points to be deleted.
   */
  popLocationDeleteList?: UpdateAnycastEipAddressAssociationsRequestPopLocationDeleteList[];
  static names(): { [key: string]: string } {
    return {
      anycastId: 'AnycastId',
      associationMode: 'AssociationMode',
      bindInstanceId: 'BindInstanceId',
      clientToken: 'ClientToken',
      dryRun: 'DryRun',
      popLocationAddList: 'PopLocationAddList',
      popLocationDeleteList: 'PopLocationDeleteList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      anycastId: 'string',
      associationMode: 'string',
      bindInstanceId: 'string',
      clientToken: 'string',
      dryRun: 'boolean',
      popLocationAddList: { 'type': 'array', 'itemType': UpdateAnycastEipAddressAssociationsRequestPopLocationAddList },
      popLocationDeleteList: { 'type': 'array', 'itemType': UpdateAnycastEipAddressAssociationsRequestPopLocationDeleteList },
    };
  }

  validate() {
    if(Array.isArray(this.popLocationAddList)) {
      $dara.Model.validateArray(this.popLocationAddList);
    }
    if(Array.isArray(this.popLocationDeleteList)) {
      $dara.Model.validateArray(this.popLocationDeleteList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

