// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateJobRequestCodeSource extends $dara.Model {
  /**
   * @remarks
   * The branch of the referenced code repository. By default, the branch configured in the code source is used. This parameter is optional.
   * 
   * @example
   * master
   */
  branch?: string;
  /**
   * @remarks
   * The ID of the code source.
   * 
   * @example
   * code-20210111103721-xxxxxxx
   */
  codeSourceId?: string;
  /**
   * @remarks
   * The commit ID of the code to be downloaded. By default, the commit ID configured in the code source is used. This parameter is optional.
   * 
   * @example
   * 44da109b5******
   */
  commit?: string;
  /**
   * @remarks
   * The path to which the job is mounted. By default, the mount path configured in the data source is used. This parameter is optional.
   * 
   * @example
   * /root/data
   */
  mountPath?: string;
  static names(): { [key: string]: string } {
    return {
      branch: 'Branch',
      codeSourceId: 'CodeSourceId',
      commit: 'Commit',
      mountPath: 'MountPath',
    };
  }

  static types(): { [key: string]: any } {
    return {
      branch: 'string',
      codeSourceId: 'string',
      commit: 'string',
      mountPath: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

