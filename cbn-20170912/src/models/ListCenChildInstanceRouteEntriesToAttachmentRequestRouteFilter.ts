// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListCenChildInstanceRouteEntriesToAttachmentRequestRouteFilter extends $dara.Model {
  /**
   * @remarks
   * The match mode of the route.
   * 
   * *   **prefix-exact-match**: exact match.
   * 
   * @example
   * prefix-exact-match
   */
  key?: string;
  /**
   * @remarks
   * The destination CIDR blocks.
   */
  value?: string[];
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      value: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.value)) {
      $dara.Model.validateArray(this.value);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

