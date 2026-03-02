// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RevokeReviewCmd extends $dara.Model {
  pbcVersionId?: number;
  static names(): { [key: string]: string } {
    return {
      pbcVersionId: 'pbcVersionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pbcVersionId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

