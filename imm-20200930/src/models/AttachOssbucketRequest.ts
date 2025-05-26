// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AttachOSSBucketRequest extends $dara.Model {
  /**
   * @remarks
   * The description of the binding. The description must be 1 to 128 characters in length. By default, no description is applied.
   * 
   * @example
   * test-attachment
   */
  description?: string;
  /**
   * @remarks
   * The name of the OSS bucket in the same region as the project.
   * 
   * This parameter is required.
   * 
   * @example
   * examplebucket
   */
  OSSBucket?: string;
  /**
   * @remarks
   * The name of the project. For information about how to create a project, see [CreateProject](https://help.aliyun.com/document_detail/478153.html).
   * 
   * This parameter is required.
   * 
   * @example
   * immtest
   */
  projectName?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      OSSBucket: 'OSSBucket',
      projectName: 'ProjectName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      OSSBucket: 'string',
      projectName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

