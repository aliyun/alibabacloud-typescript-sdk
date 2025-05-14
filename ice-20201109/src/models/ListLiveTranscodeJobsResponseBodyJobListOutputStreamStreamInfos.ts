// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListLiveTranscodeJobsResponseBodyJobListOutputStreamStreamInfos extends $dara.Model {
  /**
   * @remarks
   * The URL of the output stream.
   * 
   * @example
   * rtmp://mydomain/app/mytranscode1
   */
  outputUrl?: string;
  /**
   * @remarks
   * The type of the output stream protocol. Only the RTMP protocol is supported.
   * 
   * @example
   * rtmp
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      outputUrl: 'OutputUrl',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      outputUrl: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

