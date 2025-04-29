// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateCapacityReservationRequestPrivatePoolOptions extends $dara.Model {
  /**
   * @remarks
   * The type of the private pool to generate after the capacity reservation takes effect. Valid values:
   * 
   * *   Open: open private pool
   * *   Target: targeted private pool
   * 
   * Default value: Open.
   * 
   * @example
   * Open
   */
  matchCriteria?: string;
  /**
   * @remarks
   * The capacity reservation name. The name must be 2 to 128 characters in length. It must start with a letter but cannot start with `http://` or `https://`. The name can contain letters, digits, colons (:), underscores (_), and hyphens (-).
   * 
   * @example
   * crpTestName
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      matchCriteria: 'MatchCriteria',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      matchCriteria: 'string',
      name: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

