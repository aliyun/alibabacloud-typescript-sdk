// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDtsJobsResponseBodyDtsJobListErrorDetails extends $dara.Model {
  /**
   * @remarks
   * The error code returned.
   * 
   * @example
   * DTS-31009
   */
  errorCode?: string;
  /**
   * @remarks
   * The URL of the documentation.
   * 
   * @example
   * https://**.ali**.com/**
   */
  helpUrl?: string;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      helpUrl: 'HelpUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      helpUrl: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

