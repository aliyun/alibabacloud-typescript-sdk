// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListBlacklistCallTaggingsResponseBodyData extends $dara.Model {
  /**
   * @example
   * true
   */
  blacklisted?: boolean;
  /**
   * @example
   * job-481841171213393920
   */
  jobId?: string;
  /**
   * @example
   * 1521083xxxx
   */
  number?: string;
  static names(): { [key: string]: string } {
    return {
      blacklisted: 'Blacklisted',
      jobId: 'JobId',
      number: 'Number',
    };
  }

  static types(): { [key: string]: any } {
    return {
      blacklisted: 'boolean',
      jobId: 'string',
      number: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

