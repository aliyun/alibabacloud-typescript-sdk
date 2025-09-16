// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListTableGenerationsResponseBodyResult extends $dara.Model {
  /**
   * @remarks
   * The ID of the full index version.
   * 
   * @example
   * 1708674867
   */
  generationId?: number;
  static names(): { [key: string]: string } {
    return {
      generationId: 'generationId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      generationId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTableGenerationsResponseBody extends $dara.Model {
  /**
   * @remarks
   * requestId
   * 
   * @example
   * F6E3D968-529C-5C40-AFDD-133A8B8FD930
   */
  requestId?: string;
  /**
   * @remarks
   * The result.
   */
  result?: ListTableGenerationsResponseBodyResult[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      result: 'result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: { 'type': 'array', 'itemType': ListTableGenerationsResponseBodyResult },
    };
  }

  validate() {
    if(Array.isArray(this.result)) {
      $dara.Model.validateArray(this.result);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

