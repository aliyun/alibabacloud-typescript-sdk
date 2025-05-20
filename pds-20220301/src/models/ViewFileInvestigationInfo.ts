// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ViewFileInvestigationInfo extends $dara.Model {
  status?: number;
  suggestion?: string;
  static names(): { [key: string]: string } {
    return {
      status: 'status',
      suggestion: 'suggestion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'number',
      suggestion: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

