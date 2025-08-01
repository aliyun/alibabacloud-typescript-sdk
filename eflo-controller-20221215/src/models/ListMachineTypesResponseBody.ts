// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListMachineTypesResponseBodyMachineTypes } from "./ListMachineTypesResponseBodyMachineTypes";


export class ListMachineTypesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The instance types.
   */
  machineTypes?: ListMachineTypesResponseBodyMachineTypes[];
  /**
   * @remarks
   * The token that is used in the next request to retrieve a new page of results.
   * 
   * @example
   * a3f2224a5ec7224116c4f5246120abe4
   */
  nextToken?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * F16BA4D8-FF50-53B6-A026-F443FE31006C
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      machineTypes: 'MachineTypes',
      nextToken: 'NextToken',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      machineTypes: { 'type': 'array', 'itemType': ListMachineTypesResponseBodyMachineTypes },
      nextToken: 'string',
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.machineTypes)) {
      $dara.Model.validateArray(this.machineTypes);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

