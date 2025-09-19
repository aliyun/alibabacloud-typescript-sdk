// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListImageBuildRiskItemResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The type key of the risky build command.
   * 
   * @example
   * key
   */
  itemKey?: string;
  /**
   * @remarks
   * The type name of the risky build command.
   * 
   * @example
   * itemName.
   */
  itemName?: string;
  static names(): { [key: string]: string } {
    return {
      itemKey: 'ItemKey',
      itemName: 'ItemName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      itemKey: 'string',
      itemName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListImageBuildRiskItemResponseBody extends $dara.Model {
  /**
   * @remarks
   * The response parameters.
   */
  data?: ListImageBuildRiskItemResponseBodyData[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * A3D7C47D-3F11-57BB-90E8-E5C20C619F37
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': ListImageBuildRiskItemResponseBodyData },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

