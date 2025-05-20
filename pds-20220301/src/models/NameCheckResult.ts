// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class NameCheckResult extends $dara.Model {
  existFileId?: string;
  existFileType?: string;
  static names(): { [key: string]: string } {
    return {
      existFileId: 'exist_file_id',
      existFileType: 'exist_file_type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      existFileId: 'string',
      existFileType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

