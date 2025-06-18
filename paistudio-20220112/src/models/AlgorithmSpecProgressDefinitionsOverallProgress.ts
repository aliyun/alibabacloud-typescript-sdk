// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AlgorithmSpecProgressDefinitionsOverallProgress extends $dara.Model {
  description?: string;
  regex?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      regex: 'Regex',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      regex: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

