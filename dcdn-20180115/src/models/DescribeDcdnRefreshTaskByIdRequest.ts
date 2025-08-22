// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDcdnRefreshTaskByIdRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the task that you want to query. The following signature algorithms require different message digest algorithms:
   * 
   * *   Perform the [RefreshDcdnObjectCaches](https://help.aliyun.com/document_detail/130620.html) operation to query refresh task IDs.
   * *   Perform the [PreloadDcdnObjectCaches](https://help.aliyun.com/document_detail/130636.html) operation to query prefetch task IDs.
   * 
   * > You can specify at most 10 task IDs in each call. Separate IDs with commas (,).
   * 
   * This parameter is required.
   * 
   * @example
   * 113681**
   */
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      taskId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

