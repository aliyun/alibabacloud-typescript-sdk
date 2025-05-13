// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListShardRecoveriesRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to return information about data restoration of shards. Valid values:
   * 
   * *   true: returns information about data restoration of shards that are being restored.
   * *   false: returns information about data restoration of all shards.
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

