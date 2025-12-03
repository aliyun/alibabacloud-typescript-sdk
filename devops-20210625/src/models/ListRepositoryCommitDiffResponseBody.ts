// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListRepositoryCommitDiffResponseBodyResult extends $dara.Model {
  /**
   * @example
   * 100644
   */
  aMode?: string;
  /**
   * @example
   * 100755
   */
  bMode?: string;
  deletedFile?: boolean;
  /**
   * @example
   * --- /dev/null\\n+++ b/src/test/java/com/aliyun/codeupdemo/CodeupDemoApplicationTests.java\\n@@ -0,0 +1,13 @@\\n+package com.aliyun.codeupdemo;\\n+\\n+import org.junit.jupiter.api.Test;\\n+import org.springframework.boot.test.context.SpringBootTest;\\n+\\n+@SpringBootTest\\n+class CodeupDemoApplicationTest {\\n+\\n+ @Test\\n+ void contextLoads() {\\n+ }\\n+\\n+}\\n
   */
  diff?: string;
  isBinary?: boolean;
  isNewLfs?: boolean;
  isOldLfs?: boolean;
  newFile?: boolean;
  /**
   * @example
   * 6c268061a546378276559c713d0ad377d4xxxxxx
   */
  newId?: string;
  /**
   * @example
   * src/test/java/com/aliyun/codeupdemo/CodeupDemoApplicationTests.java
   */
  newPath?: string;
  /**
   * @example
   * 0000000000000000000000000000000000000000
   */
  oldId?: string;
  /**
   * @example
   * src/test/java/com/aliyun/codeupdemo/CodeupDemoApplicationTests.java
   */
  oldPath?: string;
  renamedFile?: boolean;
  static names(): { [key: string]: string } {
    return {
      aMode: 'aMode',
      bMode: 'bMode',
      deletedFile: 'deletedFile',
      diff: 'diff',
      isBinary: 'isBinary',
      isNewLfs: 'isNewLfs',
      isOldLfs: 'isOldLfs',
      newFile: 'newFile',
      newId: 'newId',
      newPath: 'newPath',
      oldId: 'oldId',
      oldPath: 'oldPath',
      renamedFile: 'renamedFile',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aMode: 'string',
      bMode: 'string',
      deletedFile: 'boolean',
      diff: 'string',
      isBinary: 'boolean',
      isNewLfs: 'boolean',
      isOldLfs: 'boolean',
      newFile: 'boolean',
      newId: 'string',
      newPath: 'string',
      oldId: 'string',
      oldPath: 'string',
      renamedFile: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRepositoryCommitDiffResponseBody extends $dara.Model {
  /**
   * @example
   * success
   */
  errorCode?: string;
  /**
   * @example
   * ""
   */
  errorMessage?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 0EE38A4E-8991-532A-8E8B-5C22B5D2E058
   */
  requestId?: string;
  result?: ListRepositoryCommitDiffResponseBodyResult[];
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'errorCode',
      errorMessage: 'errorMessage',
      requestId: 'requestId',
      result: 'result',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      errorMessage: 'string',
      requestId: 'string',
      result: { 'type': 'array', 'itemType': ListRepositoryCommitDiffResponseBodyResult },
      success: 'boolean',
    };
  }

  validate() {
    if(Array.isArray(this.result)) {
      $dara.Model.validateArray(this.result);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

