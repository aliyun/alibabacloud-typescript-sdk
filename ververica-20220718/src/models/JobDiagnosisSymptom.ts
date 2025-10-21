// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class JobDiagnosisSymptom extends $dara.Model {
  description?: string;
  name?: string;
  recommendation?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'description',
      name: 'name',
      recommendation: 'recommendation',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      name: 'string',
      recommendation: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

