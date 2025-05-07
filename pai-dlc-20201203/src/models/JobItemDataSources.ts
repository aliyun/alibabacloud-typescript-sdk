// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class JobItemDataSources extends $dara.Model {
  /**
   * @example
   * data-20210114104214-vf9lowjt3pso
   */
  dataSourceId?: string;
  /**
   * @example
   * /mnt/data
   */
  mountPath?: string;
  static names(): { [key: string]: string } {
    return {
      dataSourceId: 'DataSourceId',
      mountPath: 'MountPath',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataSourceId: 'string',
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

