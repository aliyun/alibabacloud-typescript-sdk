// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteAttestorRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the witness.
   * 
   * @example
   * attestor
   */
  name?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The source IP address.
   * 
   * @example
   * 221.214.XXX.XX
   */
  sourceIp?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      resourceOwnerId: 'ResourceOwnerId',
      sourceIp: 'SourceIp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      resourceOwnerId: 'number',
      sourceIp: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

