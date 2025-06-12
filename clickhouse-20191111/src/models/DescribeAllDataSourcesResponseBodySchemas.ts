// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeAllDataSourcesResponseBodySchemasSchema } from "./DescribeAllDataSourcesResponseBodySchemasSchema";


export class DescribeAllDataSourcesResponseBodySchemas extends $dara.Model {
  schema?: DescribeAllDataSourcesResponseBodySchemasSchema[];
  static names(): { [key: string]: string } {
    return {
      schema: 'Schema',
    };
  }

  static types(): { [key: string]: any } {
    return {
      schema: { 'type': 'array', 'itemType': DescribeAllDataSourcesResponseBodySchemasSchema },
    };
  }

  validate() {
    if(Array.isArray(this.schema)) {
      $dara.Model.validateArray(this.schema);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

