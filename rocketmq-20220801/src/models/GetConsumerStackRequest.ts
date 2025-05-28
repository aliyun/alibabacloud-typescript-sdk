// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetConsumerStackRequest extends $dara.Model {
  /**
   * @remarks
   * The client ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 172.26.76.48@Lqd7dImlp9KJ5V84
   */
  clientId?: string;
  static names(): { [key: string]: string } {
    return {
      clientId: 'clientId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

