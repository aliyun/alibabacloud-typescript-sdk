// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateInstanceRequestDatasets extends $dara.Model {
  /**
   * @remarks
   * The dataset ID. If the dataset is read-only, you cannot change the dataset pemission from read-only to read and write by using MountAccess.
   * 
   * You can call [ListDatasets](https://help.aliyun.com/document_detail/457222.html) to obtain the dataset ID. If you configure the dataset ID, you cannot configure the dataset URI.
   * 
   * @example
   * d-vsqjvsjp4orp5l206u
   */
  datasetId?: string;
  /**
   * @remarks
   * The dataset version. You must also configure DatasetId. If you leave this parameter empty, the value v1 is used by default.
   * 
   * @example
   * v1
   */
  datasetVersion?: string;
  /**
   * @remarks
   * Specifies whether dynamic mounting is enabled. Default value: false.
   * 
   * *   Currently, only instances using general-purpose computing resources are supported.
   * *   Currently, only OSS datasets are supported. The mounted datasets are read-only.
   * *   The MountPath of the dynamically mounted dataset must be a subpath of the root path. Example: /mnt/dynamic/data1/
   * *   A dynamically mounted dataset must be after non-dynamic datasets.
   * 
   * @example
   * false
   */
  dynamic?: boolean;
  /**
   * @remarks
   * The read and write permissions of the dataset. If the dataset is read-only, it cannot be changed to read and write.
   * 
   * @example
   * RW
   */
  mountAccess?: string;
  /**
   * @remarks
   * The mount path of the dataset.
   * 
   * @example
   * /mnt/data
   */
  mountPath?: string;
  /**
   * @remarks
   * The mount type. You cannot specify Options at the same time. This is deprecated, you can use Options instead.
   * 
   * @example
   * ReadOnly
   * 
   * @deprecated
   */
  optionType?: string;
  /**
   * @remarks
   * The custom dataset mount options. Only OSS is supported. You cannot specify OptionType at the same time. For more information, see [DSW mount configurations](https://www.alibabacloud.com/help/en/pai/user-guide/read-and-write-dataset-data).
   * 
   * @example
   * {
   *   "fs.oss.download.thread.concurrency": "10",
   *   "fs.oss.upload.thread.concurrency": "10",
   *   "fs.jindo.args": "-oattr_timeout=3 -oentry_timeout=0 -onegative_timeout=0 -oauto_cache -ono_symlink"
   * }
   */
  options?: string;
  /**
   * @remarks
   * The URI of the storage service directory, which can be directly mounted. This parameter is mutually exclusive with DatasetId.
   * 
   * URI formats of different types of storage:
   * 
   * *   OSS: oss://bucket-name.oss-cn-shanghai-internal.aliyuncs.com/data/path/
   * *   NAS: nas://29\\*\\*d-b12\\*\\*\\*\\*446.cn-hangzhou.nas.aliyuncs.com/data/path/
   * *   Extreme NAS: nas://29\\*\\*\\*\\*123-y\\*\\*r.cn-hangzhou.extreme.nas.aliyuncs.com/data/path/
   * *   CPFS: cpfs://cpfs-213\\*\\*\\*\\*87.cn-wulanchabu/ptc-292\\*\\*\\*\\*\\*cbb/exp-290\\*\\*\\*\\*\\*\\*\\*\\*03e/data/path/
   * *   Lingjun CPFS: bmcpfs://cpfs-290\\*\\*\\*\\*\\*\\*foflh-vpc-x\\*\\*\\*\\*8r.cn-wulanchabu.cpfs.aliyuncs.com/data/path/
   * 
   * @example
   * oss://bucket-name.oss-cn-shanghai-internal.aliyuncs.com/data/path/
   */
  uri?: string;
  static names(): { [key: string]: string } {
    return {
      datasetId: 'DatasetId',
      datasetVersion: 'DatasetVersion',
      dynamic: 'Dynamic',
      mountAccess: 'MountAccess',
      mountPath: 'MountPath',
      optionType: 'OptionType',
      options: 'Options',
      uri: 'Uri',
    };
  }

  static types(): { [key: string]: any } {
    return {
      datasetId: 'string',
      datasetVersion: 'string',
      dynamic: 'boolean',
      mountAccess: 'string',
      mountPath: 'string',
      optionType: 'string',
      options: 'string',
      uri: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

