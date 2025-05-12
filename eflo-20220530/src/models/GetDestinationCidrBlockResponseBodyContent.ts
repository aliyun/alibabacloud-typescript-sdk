// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetDestinationCidrBlockResponseBodyContent extends $dara.Model {
  /**
   * @remarks
   * List of destination CIDR block information for the current network instance
   */
  destinationCidrBlock?: string[];
  static names(): { [key: string]: string } {
    return {
      destinationCidrBlock: 'DestinationCidrBlock',
    };
  }

  static types(): { [key: string]: any } {
    return {
      destinationCidrBlock: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.destinationCidrBlock)) {
      $dara.Model.validateArray(this.destinationCidrBlock);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

