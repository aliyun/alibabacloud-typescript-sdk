// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListInstanceResourceTablesRequest extends $dara.Model {
  /**
   * @example
   * jackal
   */
  maxcomputeSchema?: string;
  static names(): { [key: string]: string } {
    return {
      maxcomputeSchema: 'MaxcomputeSchema',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxcomputeSchema: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

