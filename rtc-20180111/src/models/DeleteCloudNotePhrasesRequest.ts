// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteCloudNotePhrasesRequestPhrase extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1qasw23ezcsrfsawq
   */
  id?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteCloudNotePhrasesRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * ac7N****
   */
  appId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  phrase?: DeleteCloudNotePhrasesRequestPhrase;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      phrase: 'Phrase',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      phrase: DeleteCloudNotePhrasesRequestPhrase,
    };
  }

  validate() {
    if(this.phrase && typeof (this.phrase as any).validate === 'function') {
      (this.phrase as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

