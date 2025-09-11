// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DownloadClusterManagedCertResponseBody extends $dara.Model {
  /**
   * @example
   * emhlbmdza****W5qaWFuYmlhbm1hY2VzaGk=
   */
  content?: string;
  /**
   * @example
   * 4C467B38-3910-447D-87BC-AC049166F216
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
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

