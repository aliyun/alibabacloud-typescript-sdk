// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UploadRecommendationDataRequestContent extends $dara.Model {
  fields?: string;
  operationType?: string;
  static names(): { [key: string]: string } {
    return {
      fields: 'Fields',
      operationType: 'OperationType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fields: 'string',
      operationType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

