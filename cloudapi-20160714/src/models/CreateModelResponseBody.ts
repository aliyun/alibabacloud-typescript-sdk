// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateModelResponseBody extends $dara.Model {
  /**
   * @remarks
   * The time when the model was created.
   * 
   * @example
   * 2019-01-29T09:33:01Z
   */
  createdTime?: string;
  /**
   * @remarks
   * The description of the created model.
   * 
   * @example
   * Model Description
   */
  description?: string;
  /**
   * @remarks
   * The ID of the API group to which the created model belongs.
   * 
   * @example
   * 30e792398d6c4569b04c0e53a3494381
   */
  groupId?: string;
  /**
   * @remarks
   * The ID of the created model.
   * 
   * @example
   * 766c0b9538a04bdf974953b5576783ba
   */
  modelId?: string;
  /**
   * @remarks
   * The name of the created model.
   * 
   * @example
   * Test
   */
  modelName?: string;
  /**
   * @remarks
   * The URI of the created model.
   * 
   * @example
   * https://apigateway.aliyun.com/models/30e792398d6c4569b04c0e53a3494381/766c0b9538a04bdf974953b5576783ba
   */
  modelRef?: string;
  /**
   * @remarks
   * The time when the model is last modified.
   * 
   * @example
   * 2019-01-29T09:33:01Z
   */
  modifiedTime?: string;
  /**
   * @remarks
   * The region to which the created model belongs.
   * 
   * @example
   * cn-qingdao
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 4173F95B-360C-460C-9F6C-4A960B904411
   */
  requestId?: string;
  /**
   * @remarks
   * The definition of the created model.
   * 
   * @example
   * {\\"type\\":\\"object\\",\\"properties\\":{\\"id\\":{\\"format\\":\\"int64\\",\\"maximum\\":100,\\"exclusiveMaximum\\":true,\\"type\\":\\"integer\\"},\\"name\\":{\\"maxLength\\":10,\\"type\\":\\"string\\"}}}
   */
  schema?: string;
  static names(): { [key: string]: string } {
    return {
      createdTime: 'CreatedTime',
      description: 'Description',
      groupId: 'GroupId',
      modelId: 'ModelId',
      modelName: 'ModelName',
      modelRef: 'ModelRef',
      modifiedTime: 'ModifiedTime',
      regionId: 'RegionId',
      requestId: 'RequestId',
      schema: 'Schema',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createdTime: 'string',
      description: 'string',
      groupId: 'string',
      modelId: 'string',
      modelName: 'string',
      modelRef: 'string',
      modifiedTime: 'string',
      regionId: 'string',
      requestId: 'string',
      schema: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

