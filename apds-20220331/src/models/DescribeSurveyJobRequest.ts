// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeSurveyJobRequest extends $dara.Model {
  id?: number;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'id',
      regionId: 'regionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'number',
      regionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

