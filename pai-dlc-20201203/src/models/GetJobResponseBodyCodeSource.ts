// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetJobResponseBodyCodeSource extends $dara.Model {
  /**
   * @remarks
   * The code branch.
   * 
   * @example
   * master
   */
  branch?: string;
  /**
   * @remarks
   * The code source ID.
   * 
   * @example
   * code******
   */
  codeSourceId?: string;
  /**
   * @remarks
   * The code commit ID
   * 
   * @example
   * 44da109b59f8596152987eaa8f3b2487xxxxxx
   */
  commit?: string;
  /**
   * @remarks
   * The local mount path.
   * 
   * @example
   * /mnt/data
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

