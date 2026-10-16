// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DownloadAgentSpecViaOssRequest extends $dara.Model {
  /**
   * @remarks
   * The version number. If you do not specify this parameter, the version associated with the latest tag is downloaded.
   * 
   * @example
   * 1.0.0
   */
  agentSpecVersion?: string;
  static names(): { [key: string]: string } {
    return {
      agentSpecVersion: 'agentSpecVersion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentSpecVersion: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

