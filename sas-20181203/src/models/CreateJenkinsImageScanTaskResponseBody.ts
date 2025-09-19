// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateJenkinsImageScanTaskResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The quota for image scan.
   * 
   * @example
   * 100
   */
  imageScanCapacity?: number;
  /**
   * @remarks
   * The ID of the image repository.
   * 
   * @example
   * crr-upze3gcopm9c****
   */
  repoId?: string;
  /**
   * @remarks
   * The instance ID of the image repository.
   * 
   * @example
   * cri-0gkaatghnmnt****
   */
  repoInstanceId?: string;
  /**
   * @remarks
   * The ID of the region.
   * 
   * @example
   * cn-hangzhou
   */
  repoRegionId?: string;
  /**
   * @remarks
   * The ID of the scan task.
   * 
   * @example
   * fc98d58eb56f699d49bf7ebbd6d7****
   */
  taskId?: string;
  /**
   * @remarks
   * The UUID of the image asset.
   * 
   * @example
   * 6690a46c-0edb-4663-a641-3629d1a9****
   */
  uuid?: string;
  static names(): { [key: string]: string } {
    return {
      imageScanCapacity: 'ImageScanCapacity',
      repoId: 'RepoId',
      repoInstanceId: 'RepoInstanceId',
      repoRegionId: 'RepoRegionId',
      taskId: 'TaskId',
      uuid: 'Uuid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      imageScanCapacity: 'number',
      repoId: 'string',
      repoInstanceId: 'string',
      repoRegionId: 'string',
      taskId: 'string',
      uuid: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateJenkinsImageScanTaskResponseBody extends $dara.Model {
  /**
   * @remarks
   * The data returned.
   */
  data?: CreateJenkinsImageScanTaskResponseBodyData;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 52870893-48A7-5A9E-9E05-6253E5B6****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: CreateJenkinsImageScanTaskResponseBodyData,
      requestId: 'string',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

