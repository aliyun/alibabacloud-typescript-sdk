// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateEduHomeworkCorrectSubmitRequest extends $dara.Model {
  dewarp?: boolean;
  imageBase64?: string;
  imageUrl?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      dewarp: 'dewarp',
      imageBase64: 'imageBase64',
      imageUrl: 'imageUrl',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dewarp: 'boolean',
      imageBase64: 'string',
      imageUrl: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

