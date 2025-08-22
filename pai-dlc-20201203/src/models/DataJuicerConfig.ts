// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DataJuicerConfig extends $dara.Model {
  commandType?: string;
  executionMode?: string;
  static names(): { [key: string]: string } {
    return {
      commandType: 'CommandType',
      executionMode: 'ExecutionMode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commandType: 'string',
      executionMode: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

