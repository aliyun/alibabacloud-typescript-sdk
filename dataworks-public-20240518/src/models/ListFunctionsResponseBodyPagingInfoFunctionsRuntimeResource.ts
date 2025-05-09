// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListFunctionsResponseBodyPagingInfoFunctionsRuntimeResource extends $dara.Model {
  /**
   * @remarks
   * The ID of the resource group used when you run the UDF.
   * 
   * @example
   * S_resgrop_xxx
   */
  resourceGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      resourceGroupId: 'ResourceGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceGroupId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

