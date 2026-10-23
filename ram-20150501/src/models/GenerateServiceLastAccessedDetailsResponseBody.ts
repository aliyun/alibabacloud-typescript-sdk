// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GenerateServiceLastAccessedDetailsResponseBody extends $dara.Model {
  /**
   * @example
   * ba536aab-84c6-43af-8bcb-aa2cae2a34e4
   */
  jobId?: string;
  /**
   * @example
   * EEE5D280-31A0-1638-91CD-37EBDD282E7A
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      jobId: 'JobId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      jobId: 'string',
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

