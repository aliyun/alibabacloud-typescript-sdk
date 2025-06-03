// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeSurveyTemplateRequest extends $dara.Model {
  resourceType?: string;
  static names(): { [key: string]: string } {
    return {
      resourceType: 'resourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

