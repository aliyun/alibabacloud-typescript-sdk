// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListShardRecoveriesRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to display shard data recovery tracking information. Valid values:
   * 
   * - true: Displays only ongoing shard data recovery tracking information.
   * 
   * - false: Displays all shard data recovery tracking information.
   * 
   * @example
   * true
   */
  activeOnly?: boolean;
  static names(): { [key: string]: string } {
    return {
      activeOnly: 'activeOnly',
    };
  }

  static types(): { [key: string]: any } {
    return {
      activeOnly: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

