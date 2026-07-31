// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDataStreamsRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to display only managed indexes. Valid values:
   * 
   * - true: Only managed indexes are displayed.
   * 
   * - false (default): All indexes are displayed.
   * 
   * @example
   * false
   */
  isManaged?: boolean;
  /**
   * @remarks
   * The data stream name.
   * 
   * @example
   * Log1
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      isManaged: 'isManaged',
      name: 'name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      isManaged: 'boolean',
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

