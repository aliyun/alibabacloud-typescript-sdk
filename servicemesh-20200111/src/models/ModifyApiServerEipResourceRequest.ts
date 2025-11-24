// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyApiServerEipResourceRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the EIP.
   * 
   * @example
   * eip-bp1adu9jegmxnaoq****
   */
  apiServerEipId?: string;
  /**
   * @remarks
   * The type of the operation. Valid values:
   * 
   * *   `UnBindEip`: disassociates an EIP from the API server.
   * *   `BindEip`: associates an EIP with the API server.
   * 
   * @example
   * BindEip
   */
  operation?: string;
  /**
   * @remarks
   * The ID of the Alibaba Cloud Service Mesh (ASM) instance.
   * 
   * @example
   * cb8963379255149cb98c8686f274x****
   */
  serviceMeshId?: string;
  static names(): { [key: string]: string } {
    return {
      apiServerEipId: 'ApiServerEipId',
      operation: 'Operation',
      serviceMeshId: 'ServiceMeshId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiServerEipId: 'string',
      operation: 'string',
      serviceMeshId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

