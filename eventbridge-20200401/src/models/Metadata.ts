// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class MetadataAttachments extends $dara.Model {
  arn?: string;
  mimeType?: string;
  static names(): { [key: string]: string } {
    return {
      arn: 'Arn',
      mimeType: 'MimeType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      arn: 'string',
      mimeType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class Metadata extends $dara.Model {
  attachments?: MetadataAttachments[];
  static names(): { [key: string]: string } {
    return {
      attachments: 'Attachments',
    };
  }

  static types(): { [key: string]: any } {
    return {
      attachments: { 'type': 'array', 'itemType': MetadataAttachments },
    };
  }

  validate() {
    if(Array.isArray(this.attachments)) {
      $dara.Model.validateArray(this.attachments);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

